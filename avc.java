public class avc {
    public static void main(String[] args) {
        String name = "avc";
        name = "larry";
        System.out.println("Hello, " + name);
    }
}

// -----------------Pow(x,n) Leetcode 50------------------------
class Solution {
    public double myPow(double x, int n) {
        long N = n; // Convert to long to handle Integer.MIN_VALUE
        if (N < 0) {
            x = 1 / x;
            N = -N;
        }
        return fastPow(x, N);
    }

    private double fastPow(double x, long n) {
        if (n == 0) return 1.0;
        double half = fastPow(x, n / 2);
        if (n % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
}
