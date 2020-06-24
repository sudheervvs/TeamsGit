import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/teamsGitTab/index.html")
@PreventIframe("/teamsGitTab/config.html")
@PreventIframe("/teamsGitTab/remove.html")
export class TeamsGitTab {
}
