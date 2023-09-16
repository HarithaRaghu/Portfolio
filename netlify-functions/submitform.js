exports.handler = async (event) => {
    try {
      const data = JSON.parse(event.body);
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Form submission failed' }),
      };
    }
  };
  