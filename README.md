# deforest - an Amazon IP Region Parser

Filters the Amazon IP JSON feed by region

## Installation

### Dependencies
Node.js >= v6.4

### Downloading files

You can download the script either via npm or git:

- ``` npm install deforest```
- ``` git clone https://github.com/chris-ryan/deforest ```

then make the script executable:
```
cd deforest
chmod +x deforest.js
```

## Usage

Enter the command: deforest.js followed by optional arguments to filter the JSON results.

``` ./deforest.js [filterType filterValue] ```
filter types:
--region
--service

example:
``` `deforest.js --region ap-northeast-1 --service S3 ```

Amazon regions:

* GLOBAL
* ap-northeast-1
* ap-northeast-2
* ap-south-1
* ap-southeast-1
* ap-southeast-2
* ca-central-1
* cn-north-1
* eu-central-1
* eu-west-1
* eu-west-2
* eu-west-3
* sa-east-1
* us-east-1
* us-east-2
* us-west-1

... and many more
https://docs.aws.amazon.com/general/latest/gr/rande.html

# Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :)

# License
Copyright (c) 2018 Chris Ryan

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
[A Summary of the MIT license](https://tldrlegal.com/license/mit-license).
