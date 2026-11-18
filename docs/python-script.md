## Indroduction
Execute python (**python 2.7**)  code.

## Parameter
> Code

Lua script.Note that the result is returned at the end.

> Param Type

We support  two ways to pass python parameters.

- By command line

  If the paramters data is not too long, you can use this ways. You can use sys.argv to read the parameters directly.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

  

- By file

  If the parameters data is very long, it is better to use this ways. You can use sys.argv to read the parameters file list, and then you can get the parameters data from the parameters file.


> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

> Params

The receiving parameter variable of the lua script, you can use **param** variable in the lua script.

> Timeout

The maximum execution time of python code.
