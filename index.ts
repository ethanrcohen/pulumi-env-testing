import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";


const githubProvider = new github.Provider("github-provider", {
        owner: "ethanrcohen",
 });

new github.RepositoryEnvironment(
        "dev",
        {
            environment: "dev",
            repository: "pulumi-env-testing"
        },
	{
		provider: githubProvider
	}
);
