import React from 'react';
import {Globals} from '../static';

export default function ContextFactory<T>() {
    const QuestionCtx = React.createContext<T|undefined>(undefined);

    function useContext() {
        const context = React.useContext(QuestionCtx);
        if (!context) {
            throw new Error(Globals.ERRORS.CONTEXT_NOT_FOUND);
        }

        return context;
    }

    return [useContext, QuestionCtx.Provider] as const;
}