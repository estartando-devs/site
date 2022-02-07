declare module "react-step-wizard" {
  import * as React from "react";

  interface StepWizardProps {
    className: string;

    hashKey: string;
    initialStep: number;
    instance: (wizard: StepWizardProps) => void;
    isHashEnabled: boolean;
    isLazyMount: boolean;
    nav: React.JSX.Element;

    onStepChange: ({ previousStep: number, activeStep: number }) => void;

    transitions: {
      enterRight?: string;
      enterLeft?: string;
      exitRight?: string;
      exitLeft?: string;
    };
  }

  export interface StepWizardChildProps {
    isActive: boolean;
    currentStep: number;
    totalSteps: number;
    firstStep: () => void;
    lastStep: () => void;
    nextStep: () => void;
    previousStep: () => void;
    goToStep: (step: number) => void;
  }

  export interface StepperProps {
    isActive?: boolean;
    currentStep?: number;
    totalSteps?: number;
    firstStep?: () => void;
    lastStep?: () => void;
    nextStep?: () => void;
    previousStep?: () => void;
    goToStep?: (step: number) => void;
    status: Array<boolean>;
  }

  export default class StepWizard extends React.PureComponent<
    Partial<StepWizardProps>
  > {}
}
