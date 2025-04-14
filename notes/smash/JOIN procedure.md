The **JOIN** procedure is used by a [[Peer]] (typically an individual, a User) to join one of the [[Smash Neighborhoods (NBH)]].

The process is defined as follows:

1. **Pre-Interaction**: Before any action, [[Smash Neighborhood Admins]] SHOULD establish a method (outside the scope of the [[Smash Protocol]]) to communicate the neighborhood’s [[JOIN Action]] to potential users.
2. **User Initiation**: When a user wants to join a neighborhood, they MUST input either the provided [[JOIN Action]] into their Smash client (e.g., by scanning a QR code using [[Smashchats]]) or manually initiate the JOIN process towards a specific [[DID]] or [[Handles]].
3. **Decoding the Action**: The client application MUST decode the [[JOIN action]] and its parameters.
4. **User Confirmation**: The client application SHOULD prompt the user for confirmation of the actions derived from the decoded configuration (e.g., adding a new [[Smash Messaging Endpoint (SMEv1)]], sending a [[JOIN Message]], etc.).
5. **Executing Actions**: Upon confirmation, the client MUST perform the necessary actions, including sending a [[JOIN Message]] to the [[Neighborhood Admin Bot (NAB)]].
6. **Neighborhood Added**: Once the JOIN request is sent, the neighborhood SHOULD be considered added.
7. **Profile Activation**: The client MAY wait for the [[Neighborhood Admin Bot (NAB)]] to send back their own [[Profile]] to the User before displaying the Neighborhood as active on the client side.
8. **No Formal Confirmation**: There is no predefined confirmation or acceptance message. The NAB MAY optionally send a welcome message to the user as confirmation (not standardized).
9. **Failure Handling**: If any of the steps fail, this procedure SHOULD be marked as failed.

> The user's [[Profile]] is shared with the NAB as part of the [[Smash Messaging Session Initialization]].
