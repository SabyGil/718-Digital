import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ContactForm = ({
	label,
	name,
	value,
	placeholder,
	type,
	onChange,
	error,
	hash
}) => (
	<div className="form-group">
    <label htmlFor="name">{label}:</label>
    <input
      type={type}
      name={name}
			id={hash == "#Contact" ? 'form-transition' : ''}
      className={classnames('form-control form-control-lg --form-styles', {
        'is-invalid': error,
      })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      errors={error}
    />
		{error &&
			<div className="invalid-feedback">{error}</div>
		}
  </div>
);

ContactForm.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string
}

ContactForm.defaultProps = {
	type: 'text'
}

export default ContactForm;
