/* eslint-disable react/prop-types */
import React from 'react';
import Typed from 'typed.js';

function MyComponent(props) {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Restam apenas mais algumas vagas com <span>60%OFF</span> para hoje!'],
      typeSpeed: 80,
    });

    return () => {
      typed.destroy();
    };
  }, [])

    return (
        <div className={props.className}>
            <p ref={el} />
        </div>
    );
}

export default MyComponent;
