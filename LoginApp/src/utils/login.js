// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Helper function to make a login request and store the token
// export const login = async (username, password) => {
//   try {
//     // Make your login request here, for example using fetch or axios
//     const response = await fetch('https://your-api-url/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       const token = data.token;

//       // Store the token in AsyncStorage
//       await AsyncStorage.setItem('authToken', token);

//       return token;
//     } else {
//       throw new Error('Login failed');
//     }
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

// // Helper function to retrieve the current token from AsyncStorage
// export const getToken = async () => {
//   try {
//     const token = await AsyncStorage.getItem('authToken');
//     return token;
//   } catch (error) {
//     throw new Error('Failed to get token');
//   }
// };

// // Helper function to make authenticated requests using the token
// export const makeAuthenticatedRequest = async (url, method = 'GET', body = null) => {
//   try {
//     const token = await getToken();

//     if (!token) {
//       throw new Error('Token not found');
//     }

//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     };

//     const options = {
//       method,
//       headers,
//       body: body ? JSON.stringify(body) : null,
//     };

//     const response = await fetch(url, options);

//     if (response.ok) {
//       return await response.json();
//     } else {
//       throw new Error('Request failed');
//     }
//   } catch (error) {
//     throw new Error('Request failed');
//   }
// };
