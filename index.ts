import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";


const githubProvider = new github.Provider("github-provider", {
        owner: "ethanrcohen",
	appAuth: {
		installationId: "62112298",
		pemFile: process.env.APP_KEY!,
		id: "1167133"
	}
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
