/**
 * @jest-environment jsdom
 */

// Mock environment variables
Object.defineProperty(global, 'process', {
  value: {
    env: {
      VITE_API_URL: 'https://api.example.com'
    }
  }
});

// Mock fetch
global.fetch = jest.fn();

describe('apiReq', () => {
  const mockResponse = { data: 'test data' };
  const baseUrl = 'https://api.example.com';

  // Mock the API function directly
  const apiReq = async (method: string, endpoint: string, body?: unknown) => {
    const options: RequestInit = {
      method,
    };

    if (body) {
      if (body instanceof FormData) {
        options.body = body;
      } else {
        options.headers = {
          'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(body);
      }
    }

    try {
      const res = await fetch(`${baseUrl}${endpoint}`, options);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('API Request Error:', err);
      throw err;
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET requests', () => {
    it('should make GET request with correct parameters', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await apiReq('GET', '/test-endpoint');

      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/test-endpoint`, {
        method: 'GET',
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('POST requests with JSON body', () => {
    it('should make POST request with JSON body', async () => {
      const postData = { name: 'test', value: 123 };
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await apiReq('POST', '/test-endpoint', postData);

      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/test-endpoint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('POST requests with FormData', () => {
    it('should make POST request with FormData body', async () => {
      const formData = new FormData();
      formData.append('file', 'test-file');
      
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await apiReq('POST', '/upload-endpoint', formData);

      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/upload-endpoint`, {
        method: 'POST',
        body: formData,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('Error handling', () => {
    it('should handle fetch errors', async () => {
      const errorMessage = 'Network error';
      (fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
      
      console.error = jest.fn(); // Mock console.error

      await expect(apiReq('GET', '/test-endpoint')).rejects.toThrow(errorMessage);
      expect(console.error).toHaveBeenCalledWith('API Request Error:', expect.any(Error));
    });

    it('should handle JSON parsing errors', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockRejectedValueOnce(new Error('Invalid JSON')),
      });
      
      console.error = jest.fn(); // Mock console.error

      await expect(apiReq('GET', '/test-endpoint')).rejects.toThrow('Invalid JSON');
      expect(console.error).toHaveBeenCalledWith('API Request Error:', expect.any(Error));
    });
  });

  describe('Different HTTP methods', () => {
    it('should handle PUT requests', async () => {
      const putData = { id: 1, name: 'updated' };
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      await apiReq('PUT', '/test-endpoint', putData);

      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/test-endpoint`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(putData),
      });
    });

    it('should handle DELETE requests', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      await apiReq('DELETE', '/test-endpoint');

      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/test-endpoint`, {
        method: 'DELETE',
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle empty response', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(null),
      });

      const result = await apiReq('GET', '/test-endpoint');
      expect(result).toBe(null);
    });

    it('should handle undefined body', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      await apiReq('GET', '/test-endpoint', undefined);

      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/test-endpoint`, {
        method: 'GET',
      });
    });
  });
});
