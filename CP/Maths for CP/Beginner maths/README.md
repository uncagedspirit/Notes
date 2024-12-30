# Mathematics for CP (Beginners)

### Things to learn
- Basic modular arithmetic
- why do we need modular arithmetic
- GCD and LCM
- Properties of GCD and LCM
- OEIS

## The modulo operator

The modulo operator (%) returns the remainder of a division operation. 
<br/>
*If a/b = c with remainder **r**, then a % b= r, where r can range from {0, b-1}.*

- **Role of the modulo operator:** Handling number overflow, finding remaider, finding even/odd, digit extraction...

### Hashing

Representing a value by mapping it to some other value via a logic for mapping is called as hashing.
<br/>
The logic used for mapping is called a hashing function.
<br/>
Usually, modulo M is used as a function for hashing in CP where M can be any value.
But, the value of M has be be chosen carefully, as

- If a % M = H1 and b % M = H2 then if H1 = H2 given that a != b, then it implies that M is not a good hashing value and can cause collisions.
- A collision occurs in hashing when two different inputs produce the same hash value.

*That is why, choosing a good value of M is necessary.* For that, we need the M to satisfy two conditions:
1. **The number should be really large:**
    - The primary reason of this is a large value of M can decrese the probability *(P= 1/M)* of two hash values being same for different outputs.
    - As more large the number is, more is the range of its hash values.
    - *Eg., if we use 10^9 + 7 as a hash value, then the range of H lies between {0, 10^9 + 7 -1}, which is really large and reduces chances of collisions.*
2. **The number should be prime number:**
     - Primes have no pattern- Prime numbers ensure better uniformity because they avoid patterns in the remainder distribution.
     - *Eg. 10^9 + 7 is a prime number used for hashing.*

## Modular arithmetic

Modulo arithmetic is arithmetic operations involving taking the modulo with some modulus. 
It is usually given in problem statements so that solution doesn't overflow in case the answer is huge.

#### A few operations involving modulo are:

- Addition
  - (((a% M) + (b % M))% M)
- Subtraction
  - (((a% M) - (b % M)) % M **+ M**)% M  *added M because C++ cannot handle modulo of negative integers.*
- Multiplication
  - (((a% M) * (b % M))% M)
- Division
  - Mod inverse, mod exponentiation

## Greatest common divisor

GCD(A,B) is the greatst common divisor of A and B. 
<br/>
LCM(A,B) is the least common multiple of A and B.
<br/>
To calculate GCD efficiently, we can use the Euclidean Algorithm.
<br/>
Euclidean Algorithm states that GCD(A,B) = GCD(B %A, A). When A=0, the solution is B.
 
