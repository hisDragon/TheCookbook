import React from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { handleStepChange, addStepField, removeStepField, moveStep } from '../helpers/stepsHelper';

const StepsForm = ({ steps, setSteps }) => {
    return (
        <div>
            {/* Steps List */}
            {steps.map((step, index) => (
                <div key={index} className="text-sm flex gap-2 mb-2">
                    {/* Move Up button */}
                    <button
                        type="button"
                        onClick={() => moveStep(steps, setSteps, index, "up")}
                        disabled={index === 0}
                        className="cursor-pointer text-primary hover:text-primary-offset disabled:text-secondary disabled:cursor-not-allowed"
                    >
                        <FaChevronCircleUp className="w-5 h-5" />
                    </button>

                    {/* Move Down button */}
                    <button
                        type="button"
                        onClick={() => moveStep(steps, setSteps, index, "down")}
                        disabled={index === steps.length - 1}
                        className="cursor-pointer text-primary hover:text-primary-offset disabled:text-secondary disabled:cursor-not-allowed"
                    >
                        <FaChevronCircleDown className="w-5 h-5" />
                    </button>
                    <Accordion className="rounded-lg basis-248">
                        <AccordionPanel>
                            <AccordionTitle className="h-3 border-b-0">
                                <a
                                    onClick={() => removeStepField(steps, setSteps, index)}
                                    className="cursor-pointer font-semibold text-red-500 hover:text-red-700">
                                    Remove
                                </a>
                            </AccordionTitle>
                            <AccordionContent>
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                                    {/* Steps */}
                                    <textarea
                                        placeholder={`Step ${index + 1}`}
                                        value={step}
                                        rows={3}
                                        onChange={(e) =>
                                            handleStepChange(steps, setSteps, index, e.target.value)
                                        }
                                        className="w-full text-sm border-1 border-secondary outline-none rounded-lg border rounded p-2 mb-4"/>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
            ))}
            <button
                type="button"
                onClick={() => addStepField(steps, setSteps)}
                className="text-primary text-sm font-semibold cursor-pointer mb-4"
            >
                + Add Step
            </button>
        </div>
    )
}

export default StepsForm

