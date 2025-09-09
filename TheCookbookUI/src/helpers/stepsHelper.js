export const handleStepChange = (steps, setSteps, index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(prevFormData => ({ ...prevFormData, steps: updated }));
};

export const addStepField = (steps, setSteps) => {
    setSteps(prevFormData => ({
        ...prevFormData,
        steps: [
            ...steps, "",
        ],
    }));
};

export const removeStepField = (steps, setSteps, index) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(prevFormData => ({ ...prevFormData, steps: updated }));
};

export const moveStep = (steps, setSteps, index, direction) => {
    const newStep = [...steps];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newStep.length) return;

    //Swaping
    [newStep[index], newStep[targetIndex]] = [
        newStep[targetIndex],
        newStep[index],
    ];
    setSteps(prevFormData => ({ ...prevFormData, steps: newStep }));
};