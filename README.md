Football Match Simulator ⚽
 
Overview
 
Football Match Simulator is a console-based application developed using TypeScript to demonstrate Object-Oriented Programming (OOP) concepts and SOLID Principles.
 
The simulator models a football match between two predefined teams. Players perform common and role-specific actions while the system provides live Hindi commentary, score tracking, and match statistics. Gameplay is randomized, making every match produce a different outcome.
 
---
 
Features
 
- Console-based football match simulation
- Two predefined teams
- Random coin toss
- Randomized gameplay
- Live Hindi commentary
- Ball passing based on player roles
- Goal probability based on player skills
- Live scoreboard
- Match statistics
- Winner announcement
- Clean and extensible architecture
 
---
 
Technologies Used
 
- TypeScript
- Node.js
 
---
 
Project Structure
 
    src
    │
    ├── enums
    │   └── PlayerRole.ts
    │
    ├── interfaces
    │   └── ICommentary.ts
    │
    ├── players
    │   ├── Player.ts
    │   ├── Goalkeeper.ts
    │   ├── Defender.ts
    │   ├── Midfielder.ts
    │   └── Striker.ts
    │
    ├── Team.ts
    ├── Match.ts
    ├── ScoreBoard.ts
    ├── MatchStatistics.ts
    ├── HindiCommentary.ts
    └── index.ts
 
---
 
Player Roles
 
Goalkeeper
 
- Saves incoming shots.
- Starts the next attack after making a save.
 
Defender
 
- Performs a tackle as a special action.
- Passes the ball to teammates.
 
Midfielder
 
- Performs a long pass as a special action.
- Controls ball distribution.
 
Striker
 
- Shoots towards the goal.
- Attempts to score.
 
---
 
Match Flow
 
    flowchart TD
    
    A[Start Match] --> B[Coin Toss]
    B --> C[Kick Off]
 
    C --> D{Time Remaining?}
 
    D -- Yes --> E[Player Runs]
    E --> F[Special Action]
    F --> G{Current Player is Striker?}
 
    G -- No --> H[Select Receiver]
    H --> I[Pass Ball]
    I --> D
 
    G -- Yes --> J[Shoot]
    J --> K{Goal?}
 
    K -- Goal --> L[Update Score]
    L --> M[Opponent Kick Off]
    M --> D
 
    K -- Save --> N[Goalkeeper Gets Ball]
    N --> D
 
    D -- No --> O[Display Winner]
    O --> P[Display Statistics]
 
---
 
Goal Calculation
 
  Goal probability depends on the striker's shooting skill and the goalkeeper's saving skill.
   
  Goal Chance =
  (Striker Shooting Skill)
  -
  (Goalkeeper Saving Skill)
  +
  50
   
  The calculated value is limited between 20% and 80% to keep gameplay balanced.
   
  A random integer between 1 and 100 is generated.
   
  - If the random number is less than or equal to Goal Chance, a goal is scored.
  - Otherwise, the goalkeeper saves the shot.
   
  This makes every match unique while still giving stronger players a higher probability of success.
   
  ---
   
  OOP Concepts Used
   
  Encapsulation
   
  - Player attributes are protected/private.
  - Score and statistics are managed internally.
  - Data is accessed through public methods.
   
  Abstraction
   
  - "Player" is implemented as an abstract class.
  - Common player functionality is defined once.
  - Every player type provides its own implementation of special actions.
   
  Inheritance
   
  All player types inherit from the base "Player" class.
   
      Player
      │
      ├── Goalkeeper
      ├── Defender
      ├── Midfielder
      └── Striker
   
  Polymorphism
   
  The "performSpecialAction()" method behaves differently depending on the actual player type.
   
  - Goalkeeper → Save
  - Defender → Tackle
  - Midfielder → Long Pass
  - Striker → Shoot
   
  The "Match" class interacts only with the base "Player" type while the appropriate implementation is executed at runtime.
   
  ---
   
  SOLID Principles
   
  Single Responsibility Principle (SRP)
   
  Each class has a single responsibility.
   
  Class| Responsibility
  Player| Stores player information and common actions
  Team| Manages team players
  Match| Controls the complete match flow
  ScoreBoard| Maintains live score
  MatchStatistics| Maintains match statistics
  HindiCommentary| Displays live commentary
   
  ---
   
  Open/Closed Principle (OCP)
   
  The project can be extended without modifying existing code.
   
  Examples:
   
  - Add new player roles
  - Add new commentary languages
  - Add new game modes
   
  ---
   
  Liskov Substitution Principle (LSP)
   
  Any subclass of "Player" can replace a "Player" object.
   
  Examples:
   
  - Goalkeeper
  - Defender
  - Midfielder
  - Striker
   
  ---
   
  Interface Segregation Principle (ISP)
   
  "ICommentary" contains only commentary-related operations.
   
  Only commentary implementations are required to implement this interface.
   
  ---
   
  Dependency Inversion Principle (DIP)
   
  "Match" depends on the abstraction "ICommentary" instead of a concrete implementation.
   
  This allows switching from "HindiCommentary" to another commentary implementation without changing the "Match" class.
 
---
 
How to Run
 
Install Dependencies
 
    npm install
 
Compile TypeScript
 
    npx tsc
 
Run the Application
 
    npx ts-node src/index.ts
 
or, after compilation,
 
    node dist/index.js
 
---
 
Sample Console Output
 
    ========================================
    FOOTBALL MATCH SIMULATOR
    ========================================
     
    Team Jethalal vs Team Bhide
     
    Swagat hai dosto!
    Aaj ka romanchak mukabla shuru hone wala hai.
     
    Coin Toss...
    Team Jethalal won the toss.
     
    Kick Off!
     
    Ball Jethalal ke paas hai.
     
    Jethalal ball lekar aage badh raha hai.
     
    Jethalal ne Tapu ko pass diya.
     
    Tapu ne Goli ko pass diya.
     
    Goli ne zabardast shot maara.
     
    GOOOOOAAALLLL!!
     
    Current Score
     
    Team Jethalal 1 - 0 Team Bhide
     
    Match Samapt!
     
    Winner: Team Jethalal
 
---
 
Future Enhancements
 
- Multiple commentary languages
- New player roles
- Difficulty levels
- Graphical User Interface (GUI)
- Database integration
- Multiplayer support
 
---
