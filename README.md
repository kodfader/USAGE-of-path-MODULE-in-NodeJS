# Node.js Path Module Examples

This repository contains a Node.js script that demonstrates the usage of various methods available in the `path` module. The `path` module provides utilities for working with file and directory paths, and this script includes examples and comments for each method to help you understand how to use them.

## Purpose

The purpose of this script is to:

- Provide a comprehensive overview of all methods and properties available in the Node.js `path` module.
- Offer practical examples and explanations for each method.
- Serve as a reference or learning resource for developers who want to understand how to manipulate file and directory paths in Node.js.

## Usage

To run the script and see the examples in action, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/kodfader/USAGE-of-path-MODULE-in-NodeJS.git]
    cd path-module-examples
    ```

2. **Install Node.js:**

    Ensure you have Node.js installed on your machine. You can download and install it from [Node.js official website](https://nodejs.org/).

3. **Run the script:**

    ```bash
    node path-examples.js
    ```

## Methods Covered

The script includes examples for the following methods and properties from the `path` module:

- **path.basename()**: Returns the last portion of a path.
- **path.dirname()**: Returns the directory name of a path.
- **path.extname()**: Returns the extension of the path.
- **path.format()**: Returns a path string from an object.
- **path.isAbsolute()**: Determines if path is an absolute path.
- **path.join()**: Joins all given path segments together using the platform-specific separator.
- **path.normalize()**: Normalizes the given path, resolving '..' and '.' segments.
- **path.parse()**: Returns an object whose properties represent significant elements of the path.
- **path.relative()**: Returns the relative path from one path to another.
- **path.resolve()**: Resolves a sequence of paths or path segments into an absolute path.
- **path.sep**: Provides the platform-specific path segment separator.
- **path.delimiter**: Provides the platform-specific path delimiter.
- **path.win32**: Provides access to Windows-specific implementations of the path methods.
- **path.posix**: Provides access to POSIX-specific implementations of the path methods.
- **path.toNamespacedPath()**: Converts the given path to a namespace path (only relevant on Windows).

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
