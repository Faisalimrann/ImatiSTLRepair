# STL Repair

imati-stl-repair is a node package that is based on the ImatiSTL. ImatiSTL is a C++ library for applications that need to finely post-process raw polygon meshes represented by STL files. It is particularly useful in 3D printing scenarios: the repairing functions provided by ImatiSTL bridge the gap between printable meshes and real-world meshes with diverse potential defects and flaws (e.g. degenerate triangles, self-intersections, surface holes, ...).

[![install size](https://packagephobia.com/badge?p=imati-stl-repair)](https://packagephobia.com/result?p=imati-stl-repair)
## Installation
Installation using yarn
```sh
yarn add imati-stl-repair
```
Installation using npm
```sh
npm i imati-stl-repair
```

## How to use ?

```sh
const repair = require('imati-stl-repair');
const response = await repair('INPUT_FILE_PATH','OUTPUT_FILE_PATH');
```
It returns the path of fixed STL file.

## License

MIT

## Credits

imati-stl-repair is based on the ImatiSTL C++ library. This package was created and is maintained by [Faisal Imran](https://faisalimran.com).

   
