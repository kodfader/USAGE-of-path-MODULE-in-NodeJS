// Importing the path module
const path = require('path');



// Code Start //


// path.basename()
// Returns the last portion of a path
console.log(path.basename('/foo/bar/baz/asdf/quux.html')); // Output: 'quux.html'
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html')); // Output: 'quux'

// path.dirname()
// Returns the directory name of a path
console.log(path.dirname('/foo/bar/baz/asdf/quux')); // Output: '/foo/bar/baz/asdf'

// path.extname()
// Returns the extension of the path
console.log(path.extname('index.html')); // Output: '.html'

// path.format()
// Returns a path string from an object
console.log(path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
})); // Output: '/home/user/dir/file.txt'

// path.isAbsolute()
// Determines if path is an absolute path
console.log(path.isAbsolute('/foo/bar')); // Output: true
console.log(path.isAbsolute('foo/bar')); // Output: false

// path.join()
// Joins all given path segments together using the platform-specific separator
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // Output: '/foo/bar/baz/asdf'

// path.normalize()
// Normalizes the given path, resolving '..' and '.' segments
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // Output: '/foo/bar/baz/asdf'

// path.parse()
// Returns an object whose properties represent significant elements of the path
console.log(path.parse('/home/user/dir/file.txt'));
// Output:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// path.relative()
// Returns the relative path from one path to another
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')); // Output: '../../impl/bbb'

// path.resolve()
// Resolves a sequence of paths or path segments into an absolute path
console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')); // Output: '/tmp/subfile'

// path.sep
// Provides the platform-specific path segment separator
console.log(path.sep); // Output: '\\' on Windows, '/' on POSIX

// path.delimiter
// Provides the platform-specific path delimiter
console.log(path.delimiter); // Output: ';' on Windows, ':' on POSIX

// path.win32 and path.posix
// Provides access to Windows-specific and POSIX-specific implementations of the path methods
console.log(path.win32.basename('C:\\temp\\myfile.html')); // Output: 'myfile.html'
console.log(path.posix.basename('/tmp/myfile.html')); // Output: 'myfile.html'

// path.toNamespacedPath()
// Converts the given path to a namespace path (only relevant on Windows)
// On non-Windows systems, it returns the same path.
console.log(path.toNamespacedPath('C:\\temp\\myfile.html')); // Output: '\\\\?\\C:\\temp\\myfile.html' on Windows, 'C:\\temp\\myfile.html' on POSIX

// path.parse()
// Returns an object whose properties represent significant elements of the path
console.log(path.parse('/home/user/dir/file.txt'));
// Output:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }



// Code End , Happy coding :) //