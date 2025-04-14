[[IMProto Messages]] are categorized into types, each serving specific functions.

Messages are standardized in a decentralized manner and it is up to [[IMProto]] clients to implement the most popular lexicon/types based on their desired user experience.

Here we define two main lexicons: 
- `org.improto.*`: for generic instant messaging types,
- `com.smashchats.*`: for social messaging interactions as defined by [[Smashchats]],

### IMProto.org

#### `org.improto.chat.text`

The basic message format for sending text content. This can include plain text communication between users.

#### `org.improto.profile`

[[Profile]]

Carries the sender's [[Profile]] information. This message is used to share personal details with others according to privacy settings.

### Smashchats.com

#### `com.smashchats.nbh.join`

Sent by a user to the [[Neighborhood Admin Bot (NAB)]] when joining their administered [[Smash Neighborhoods (NBH)]]. See [[JOIN Action]].

#### `com.smashchats.nbh.discover`

Sent by a user to the [[Neighborhood Admin Bot (NAB)]] as a request to explore other profiles/neighbors in their administered [[Smash Neighborhoods (NBH)]].

#### `com.smashchats.nbh.profiles`

Sends a list of multiple [[Profile]], typically as a response to a 'discover' request.
Also contains sorting/distance information. (TBD)

#### `com.smashchats.action.*`

Represents an action taken by one user on another, such as:
- `com.smashchats.action.smash`:  Indicating a positive interest or approval ([[Smashing]]).
- `com.smashchats.action.pass`: Indicating a neutral or negative interest ([[Passing]]).
- `com.smashchats.action.clear`: Removing any previous interactions.

[[Blocking]] the user, preventing further communication or visibility, is seen as a [[Passing]] from outsiders perspective.

This information doesn't have to be shared with the other user but is typically shared with the [[Neighborhood Admin Bot (NAB)]] as an exchange of value:
- Users give the NAB insights on their social graph
- The NAB allows Users to make connections
