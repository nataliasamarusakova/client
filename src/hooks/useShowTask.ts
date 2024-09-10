import { useEffect, useRef, useState } from 'react';

export function useShowTask() {

    const formRef = useRef<HTMLDivElement>(null);
    const [selectId, setSelectId] = useState('');
    const [showFunctionsForm, setFunctionsForm] = useState(false);

    const handleAddTask = (id: string) => {
        setSelectId(id);
        setFunctionsForm((showFunctions) => !showFunctions);
    };

    const handleClickOutSide = (event: any) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setFunctionsForm(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutSide, true)
        return () => document.removeEventListener('click', handleClickOutSide, true)
    }, [])

    return {
        formRef,
        selectId,
        handleAddTask,
        showFunctionsForm,
        setFunctionsForm,
    };
};

