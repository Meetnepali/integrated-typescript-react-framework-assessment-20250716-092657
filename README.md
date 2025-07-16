# Integrated TypeScript + React Framework Assessment

## Overview
Utkrusht's skill assessment dashboard is encountering critical build failures due to type-checking errors and a functional regression in the `SkillShowcaseCard` React component. Your task is to quickly unblock the production build by diagnosing and fixing these issues.

## Problem Statement
- The recent refactor of the candidate data model and the `SkillShowcaseCard` component has broken strict type safety and caused runtime/test errors.
- TypeScript now throws errors during compilation, and Jest tests for `SkillShowcaseCard` are failing due to incorrect prop types, hook usage, and unstable key warnings.
- Prop types must align strictly with selector outputs, no manual type casts or unsafe `any` allowed.
- Your fixes must also pass ESLint and Prettier linting.

## Task
You must:
- Investigate and fix type definition errors in `SkillShowcaseCard.tsx` and its related type import `candidate.types.ts` (strict mode is enabled).
- Use proper TypeScript utility types to model optional fields in the component prop type.
- Refactor hook usage within `SkillShowcaseCard` to prevent unnecessary re-renders.
- Ensure array renders use unique, stable key props.
- Remove any unsafe type assertions (`as any`), manual type casts, or usage of `any`.
- Align all code with ESLint and Prettier configuration.

## Setup Instructions
1. Ensure you have Docker and Docker Compose installed.
2. Clone this repository and navigate to its root directory.
3. Run:
   
       ./run.sh

   This script will build the Docker image, start the environment, install dependencies, and run build, lint, and test checks.

## What Needs to be Fixed
- Resolve strict type errors and prop shape mismatches in `SkillShowcaseCard.tsx` and `candidate.types.ts`.
- Refactor hooks in the card to prevent redundant renders.
- Ensure all array elements in renders have stable keys; eliminate lint/test key warnings.
- Strictly type the component to be compatible with Redux selector outputs.
- All changes must comply with the existing ESLint and Prettier configs.

## Expected Outcomes
Once fixed:
1. TypeScript strict build (`yarn run build`) passes without errors.
2. All Jest tests for `SkillShowcaseCard` pass.
3. ESLint (`yarn run lint`) and Prettier checks return zero errors.
4. Array renders use unique, stable keys and there are no key-related warnings.
5. Strict prop and hook type safety is restored with no use of `any` or unsafe casts.

## How to Verify
- Run `./run.sh` (or the equivalent commands inside the container) to validate that:
  - The build command runs successfully with strict type-checking.
  - All tests complete and pass.
  - Linting checks produce no errors or warnings.
- Inspect the code to ensure that all array-key usages are unique and stable, prop and selector types are strictly defined, and there are no unsafe casts.

---

**Note:** Only modify `src/components/SkillShowcaseCard.tsx` and `src/types/candidate.types.ts` as required by the task.