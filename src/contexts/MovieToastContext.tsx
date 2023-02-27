import React, {useContext, useMemo, useState} from 'react';
import MovieToast from "../components/common/MovieToast";

interface MovieToastState {
    show: boolean;
    visible: boolean;
    visibleHandler: () => void;
    showToastHandler: (content: string) => void;
}

export const MovieToastContext = React.createContext<MovieToastState>({
    show: false,
    visible: false,
    visibleHandler: () => {},
    showToastHandler: () => {}
})

interface MovieToastProviderProps {
    children: React.ReactNode;
}

export const MovieToastProvider = ({children} : MovieToastProviderProps) => {

    const [showToast, setShowToast] = useState(false)
    const [toastContent, setToastContent] = useState('')
    const [visible, setVisible] = useState(false)

    const visibleHandler = () => {
        setVisible(!visible)
    }

    const showToastHandler = (content: string) => {
        setToastContent(content)
        setShowToast(true)
        setVisible(true)
        setTimeout(() => {
            setShowToast(false)
        }, 1600)
    }

    const contextValue = useMemo(() => ({
        show: showToast,
        visible,
        visibleHandler,
        showToastHandler
    }), [showToast, visible, visibleHandler, showToastHandler])

    return (
        <MovieToastContext.Provider value={contextValue}>
            {children}
            <MovieToast show={showToast} content={toastContent} visible={visible} visibleHandler={visibleHandler}/>
        </MovieToastContext.Provider>
    );
};

export const useMovieToast = () => {
    return useContext(MovieToastContext)
}