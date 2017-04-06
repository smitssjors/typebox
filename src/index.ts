/*--------------------------------------------------------------------------

typebox - runtime structural type system for javascript.

The MIT License (MIT)

Copyright (c) 2017 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/

import {reflect}   from "./reflect"
import {infer}     from "./infer"
import {compare}   from "./compare"
import {generate}  from "./generate"
import {check}     from "./check"

import {
    TAny,
    TNull,
    TUndefined,
    TObject, 
    TArray,
    TTuple,
    TNumber,
    TString,
    TBoolean,
    TDate,
    TFunction,
    TUnion, 
    TLiteral,

    Any,
    Null,
    Undefined,
    Object,
    Array,
    Tuple,
    Number, 
    String, 
    Boolean, 
    Date,
    Function,
    Union,
    Literal
} from "./spec"

export {
    infer,
    compare,
    check,
    reflect,
    generate,

    TAny,
    TNull,
    TUndefined,
    TObject, 
    TArray,
    TTuple,
    TNumber,
    TString,
    TBoolean,
    TDate,
    TFunction,
    TUnion, 
    TLiteral,

    Any,
    Null,
    Undefined,
    Object,
    Array,
    Tuple,
    Number, 
    String, 
    Boolean, 
    Date,
    Function,
    Union,
    Literal
}

