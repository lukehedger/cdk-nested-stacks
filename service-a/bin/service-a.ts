#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkInitStack } from "../lib/service-a-stack";

const app = new App();

new CdkInitStack(app, "CdkInitStack");
