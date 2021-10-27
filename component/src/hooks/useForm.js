import { useState, useEffect } from 'react';

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    const newErrors = validate ? validate(values) : {};

    try {
      setIsLoading(true);
      e.preventDefault();

      if (Object.keys(newErrors).length === 0) {
        await onSubmit(values);
      }

      setErrors(newErrors);
      setIsLoading(false);
    } catch (e) {
      newErrors.submit = '이메일 또는 비밀번호가 잘못 입력 되었습니다.';

      setErrors(newErrors);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => setIsLoading(false); // cleanup function을 이용하여 router전의 상태 초기화 진행
  }, []);

  return {
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
