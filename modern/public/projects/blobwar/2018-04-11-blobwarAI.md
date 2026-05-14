---
layout: post
title: Blobwar AI
date: 2018-04-11
permalink: /projects/blobwarAI/
---

# Blobwar Artificial Intelligence (Rust)
_Contributors: Fanny Graille_
<hr />

This project was part of a course on **Advanced algorithms approximation**.
The aim was to develop an AI for a board game named Blobwar and compete with the other students during a tournament.

I was personally responsible for :
   * Implementation of the basic alpha-beta pruning algorithm
   * Research optimisations -inspired by the game of Go - : killer heuristic, transposition tables, sorting of the nodes.

### Blobwar game

![board.jpg](/static/projects/blobwar/blobwar.jpg "Blobwar board during a game"){:style="float: left;margin-right: 20px;margin-top: 2px;margin-bottom: 2px;" :height="100px" width="100px"}
The game of blobwar is played on an 8 x 8 square board where two players (blue and red) play against each other. Each player has a set of pawns called blobs. The game is played in turn by turn. Each round, when possible, the current player chooses a blob and moves it. Any movement on an adjacent square (including diagonally) sees the blob duplicate itself on the target square. You can also jump to a distance of 2 squares but in this case, the blob moves from the starting square to the ending square. After the move, we look at the squares directly next to the arrival square and all the opposing blobs on these squares change color.
The game stops when the board is full and the player with the most blobs wins the game.

### Implementation details

In order to win the tournament, the AI needs to select its next move taking into account its opponent future moves', and that, as far as possible throught the game.
To achieve this, an alpha-beta pruning algorithm was implemented, using Negamax conventions.
More, many optimisations were tested, including : sorting the nodes, transpose tables, killer heuristic, parallelism and genetic algorithm for the evaluation function.

### Results

The final algorithm achieved second (over 36 teams) during the tournament, losing the last confrontation 3 to 4.
