import React from 'react';

const Accordion = ({ title, children }) => {
  return (
    <section>
      <details>
        <summary className="mb-2 focus:outline-none focus-visible:ring-2">
          {title}
        </summary>
        <p>{children}</p>
      </details>
    </section>
  );
};

export default Accordion;
