## SSH Remote Execution

Allows remote login to a machine via SSH and execution of shell commands.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

## Input

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

- ### Credentials

  You can create SSH credential types in the **App Development > Credential** section. The following options need to be configured:

  - **Host**: The remote IP address.
  - **Port**: The SSH remote host port, default is 22.
  - **User**: The login username.
  - **Password**: The login password.

> The original image contained a credential, token or application identifier and is excluded from publication. Create and enter your own secret in the local configuration.


### Command Line

The shell command to be executed on the target remote host. For example:

```shell
ps -ef
```


## Output

The string output from the shell command.
