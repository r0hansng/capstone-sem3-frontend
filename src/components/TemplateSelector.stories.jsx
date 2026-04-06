import { useState } from "react";
import TemplateSelector from "./TemplateSelector";

const meta = {
  title: "Components/TemplateSelector",
  component: TemplateSelector,
  argTypes: {
    onChange: { action: "templateChanged" },
  },
};

export default meta;

export const Interactive = {
  render: () => {
    const [selectedTemplate, setSelectedTemplate] = useState("classic");

    return (
      <div className="p-8 bg-white min-h-[360px]">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          onChange={(templateId) => {
            setSelectedTemplate(templateId);
          }}
        />
        <p className="mt-6 text-sm text-gray-600">Selected template: {selectedTemplate}</p>
      </div>
    );
  },
};
