# faasci
Simple AWS Lambda based CI tool.

Auto-generates a skeleton of a Node.js project, sets up the IAM Role and Lambda function, generates the CodeCommit Repo, and sets up a CodeBuild project to automatically build and deploy it. Also sets up a hook to a codeCommitTrigger lambda function.
