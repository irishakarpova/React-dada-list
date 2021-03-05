import { Record } from "immutable";
import {
    ADD_ARTICLE,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE,
    SUCCESS,
    START,
    FAIL
} from "../constants";
import { arrToMap } from "./utils";

const ArticleRecord = Record({
    id: null,
    title: null,
    description: null,
    location: null,
    members: null
});

const DataRecord = Record({
    entities: arrToMap([], ArticleRecord),
    loading: false,
    error: false
});

export default (articlesState = new DataRecord(), action) => {
    const { type, payload, randomId, response } = action;

    switch (type) {
        case LOAD_ALL_ARTICLES + START:
            return articlesState.set("loading", true);

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                .set("entities", arrToMap(response, ArticleRecord))
                .set("loading", false);

        case LOAD_ALL_ARTICLES + FAIL:
            return articlesState.set("error", true);

        case LOAD_ARTICLE:
            return articlesState.set(
                ["entities", payload.id],
                new ArticleRecord(response)
            );
        case ADD_ARTICLE:
            return articlesState.setIn(["entities", randomId], {
                ...payload.article,
                id: randomId
            });

        default:
            return articlesState;
    }
};
