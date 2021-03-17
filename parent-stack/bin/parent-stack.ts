#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkInitStack } from "../lib/parent-stack-stack";

const app = new App();

new CdkInitStack(app, "CdkInitStack");
