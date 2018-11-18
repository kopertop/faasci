# faasci
Simple AWS Lambda based CI tool.

Auto-generates a skeleton of a Node.js project, sets up the IAM Role and Lambda function, generates the CodeCommit Repo, and sets up a CodeBuild project to automatically build and deploy it. Also sets up a hook to a codeCommitTrigger lambda function.

## Usage
Install globally for the fsci (or faasci) command line tool

```
fsci create MyNewProject
```

Automatically creates:
	* A new CodeCommit Repository called `MyNewProject`
	* A new CodeBuild Project called `MyNewProject` which uses the new CodeCommit Repository as a source
	* A new Lambda function called `MyNewProject`
	* A new IAM role called `MyNewProject-lambda-role`
	* A new IAM Role called `MyNewProject-codebuild-role` with access to publish to the Lambda Function
	* A Trigger from `MyNewProject` to a Lambda function called `codeCommitTrigger` (TBD: Auto-create this)
	* A checkout of `MyNewProject` with a buildspec.yml, jasmine configs, tsconfigs, packageconfigs, and default README file (copied from the template directory)
