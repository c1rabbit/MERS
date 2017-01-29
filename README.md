# MERS

* install node module `npm install mers --save`
* use in application `var mers = require('mers')`

## Usage
`mers.generate(orgID, loanNum)`
* input
 * orgID: your 6 digit MERs org ID
 * loanNum: loan number not to exceed 9 digits
* output
 * one checksum digit

`mers.validate(minNum)`
* input
 * minNum: 16 digit Mortgage Instrument Number(MIN)
* output
 * boolean: checks if MIN is a valid format
