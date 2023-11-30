# Advent of code 2023

## Setup

To run this project, you need `Bun` installed in your machine. Go to [this](https://bun.sh/) link to download it.

Run the following command:

1. `bun install` -> to install all dependencies
2. `bun run generate` -> Even if you don't need it, it will try to recreate all the files needed to run the project

And you are ready to start coding!

## Usage

To run any file, use this pattern:

```bash
bun run test {day} {part} {sample}
```

**day**: represent a number between `1` and `25` (folder structure).

**part**: `a` or `b`.

**sample**: if you want to use the sample data for testing over the actual input, add `sample` as the last argument of the cli command.
