# MERS-MIN

## Purpose
Referring to the MERS(Mortgage Electronic Registration Systems), this module uses a mod 10 weight 2 algorithm on a 15 digit string (comprised of a 6-digit organization ID and up to 15-digit loan number) to compute the 16th checksum digit.

The organizaion id + loan number + checksum digit should yield a valid 16-digit MIN(Mortgage Identification Number)

## Installation
* install node module `npm install mers --save`
* use in application `var mers = require('mers')`

## Methods

### generate(orgID, loanNum)
* @param orgID: your 6 digit MERs org ID
* @param loanNum: loan number not to exceed 9 digits
* output: [mixed] one checksum digit

### validate(minNum)
* @param minNum: 16 digit Mortgage Instrument Number(MIN)
* output: [boolean] checks if MIN is a valid format
