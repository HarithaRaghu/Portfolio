exports.handler = async (event) => {
    try {
      console.log('Function invoked');
     
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully' }),
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Form submission failed' }),
      };
    }
  };
  