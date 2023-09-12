/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useSearchParams, useParams, useHref } from "react-router-dom";
import { WIKILINKSregex as WIKILINKSregex } from "obsidian-index-wikilinks/dist/lib/wikilinkRegex"

import "./NoteContainer.scss";
import Db from "../db/Db";
import Footer from "./Footer";

function NoteContainer({ style, verticalMode, overlay, path, scrollToNote }) {
  const [note, setNote] = useState({ index: 0 });

  const { entrypoint } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const _base = useHref("/");
  const base = _base === '/' ? '' : _base

  useEffect(() => {
    const getNoteAndParseLinks = async () => {
      const note = await Db.getNote(path);
      setNote({
        ...note,
        content: `# ${note.title ?? ''}\n\n${note.content}`.replaceAll(
          WIKILINKSregex,
          (_match, index, _block, title) => {
            return `[${title ?? index}](${base}/${encodeURIComponent(index)})`;
          }
        ),
      });
    };
    getNoteAndParseLinks();
  }, [path]);

  const findParentA = (target, count = 5) => {
    if (target.nodeName.toLowerCase() === "a") {
      return target;
    }
    if (count === 0) {
      return null;
    }
    return findParentA(target.parentNode, count - 1);
  };

  const handleClick = (e) => {
    const isLinkRemote = (targetA) => {
      return new URL(document.baseURI).origin !== new URL(targetA.href, document.baseURI).origin;
    }

    const extractPathAndAddToStack = (targetA) => {
      const notePath = targetA.pathname.slice(
        base.length === 1 ? 1 : base.length + 1
      );

      const currentPaths = searchParams
        .getAll("stacked")
        .map((e) => decodeURIComponent(e));

      if (currentPaths.includes(notePath) || entrypoint === notePath) {
        scrollToNote(notePath);
      } else {
        const index = currentPaths.indexOf(path);
        setSearchParams({
          stacked: [...currentPaths.slice(0, index + 1), notePath],
        });
      }
    };

    if (e.target.nodeName.toLowerCase() === "a") {
      if (!e.metaKey && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        if (!isLinkRemote(e.target)) {
          e.preventDefault();
          extractPathAndAddToStack(e.target);
        }
      }
    } else {
      e.preventDefault();
      const target = findParentA(e.target);
      if (target) {
        extractPathAndAddToStack(target);
      }
    }
  };

  return (
    <main className={`NoteContainer ${overlay ? "Overlay" : ""}`} style={style}>
      <div
        className="PresentedNote"
        style={{ opacity: verticalMode ? 0 : undefined }}
      >
        <div className="NoteContainer" onClick={handleClick}>
          <div className="PrimaryNote">
            <div>
              <div className="MarkdownContainer">
                <ReactMarkdown>{note?.content}</ReactMarkdown>
              </div>
            </div>
          </div>
          <Footer path={path} />
        </div>
      </div>
      {verticalMode ? (
        <div className="ObscuredLabel">{note?.title}</div>
      ) : (
        <></>
      )}
    </main>
  );
}

export default NoteContainer;
