# Git Workflow for React Project

## 1. Initialize the Repository

- Navigate to the project folder:

  ```bash
  cd ~/Desktop/programing/react-basic-to-adanced/react-concept-project
  ```

- Initialize Git:
  ```bash
  git init
  ```

---

## 2. Create and Commit to `main` Branch

- Create and switch to the `main` branch:

  ```bash
  git checkout -b main
  ```

- Stage all files:

  ```bash
  git add .
  ```

- Commit the files:
  ```bash
  git commit -m "Initial commit for main branch"
  ```

---

## 3. Add Remote Repository

- Create a new repository on GitHub (e.g., `react-concept-project`).

- Link the local repository to the remote:
  ```bash
  git remote add origin <your-repository-url>
  ```

---

## 4. Push `main` Branch

- Push the `main` branch to the remote repository:
  ```bash
  git push -u origin main
  ```

---

## 5. Create and Push New Branches

For each new class or feature, follow these steps:

- Create and switch to a new branch:

  ```bash
  git checkout -b <branch_name>
  ```

  Example:

  ```bash
  git checkout -b class-1-introduction-to-react
  ```

- Add files or code for the branch:

  ```bash
  echo "<h2>Class 1: Introduction to React</h2>" > class1.html
  ```

- Stage and commit changes:

  ```bash
  git add .
  git commit -m "Added code for Class 1: Introduction to React"
  ```

- Push the branch:
  ```bash
  git push -u origin <branch_name>
  ```

---

## 6. Manage Branches

- List all local branches:

  ```bash
  git branch
  ```

- List all branches (local and remote):

  ```bash
  git branch -a
  ```

- Switch to another branch:
  ```bash
  git checkout <branch_name>
  ```

---

## Tips for Branch Management

- Always commit your changes before switching branches:

  ```bash
  git add .
  git commit -m "Save progress before switching branches"
  ```

- Use descriptive branch names for better organization, such as:
  - `class-2-jsx-and-components`
  - `class-3-useEffect`

---

## Example Branch Names

- `main`
- `class-1-introduction-to-react`
- `class-2-jsx-and-components`
- `class-3-useEffect`
- `class-4-custom-hooks`

---

## Troubleshooting

- Revert changes:

  ```bash
  git revert <commit_hash>
  ```

- Reset to a specific commit:
  ```bash
  git reset --hard <commit_hash>
  ```

---

This guide provides an organized workflow for managing branches in a React project. It helps you keep your project clean and well-structured while working with multiple features or classes.
