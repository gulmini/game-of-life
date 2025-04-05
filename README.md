# Guide to Conway's Game of Life

Conway's Game of Life is a cellular automaton devised by British mathematician John Horton Conway in 1970. It is a zero-player game, meaning its evolution is determined by its initial state, requiring no further input after the initial configuration. In this project, you can create an initial configuration, observe how it evolves, and explore the patterns in the game.

## Features
- **Create and simulate your own Game of Life**: Set up your initial configuration and watch how it evolves based on the rules of the game.
- **Explore an infinite grid**: The game uses an infinite two-dimensional grid, allowing for a wide variety of simulations.
- **Adjust simulation speed**: You can change how fast the game progresses through generations.
- **Save your boards**: Keep your configurations to revisit or share later.

## Rules

The game is played on a two-dimensional orthogonal grid of square cells, each in one of two possible states: live or dead. The following rules govern how the cells evolve:

1. **Underpopulation**: Any live cell with fewer than two live neighbors dies.
2. **Survival**: Any live cell with two or three live neighbors lives on to the next generation.
3. **Overpopulation**: Any live cell with more than three live neighbors dies.
4. **Reproduction**: Any dead cell with exactly three live neighbors becomes a live cell.

## Patterns

Several well-known patterns emerge in the Game of Life, including:

- **Still Lifes**: Patterns that do not change over time, such as the block, beehive, and loaf.
- **Oscillators**: Patterns that return to their initial state after a set number of generations, like the blinker, toad, and beacon.
- **Spaceships**: Patterns that move across the grid, such as the glider.

## Getting Started

To start playing, you need to create an initial configuration of live and dead cells. This can be done manually or by using a random configuration. Once the initial state is set, the game will progress in steps, applying the rules to every cell simultaneously.

## How to Use

1. Open the website to view the game interface.
2. Set up an initial configuration of live and dead cells.
3. Start the simulation to watch how the pattern evolves.
4. Adjust the simulation speed as needed to explore different outcomes.
5. Save your board if you wish to revisit or share it later.

## Technologies Used

- HTML
- CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
