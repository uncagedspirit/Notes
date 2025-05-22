## Immutable and mutable in python



#### Immutable objects
- Definition: Cannot change their value once created (e.g. int, str, tuple).
- Memory Behavior: Operations always create a new object in memory.
The original object’s reference (id) stays unchanged; the variable now points to a new id.
- Implication: Changing one variable does NOT affect another. Safe to reuse values, no side effects.
- eg,
  ```py
  a = 10
  b = a        # both point to same value (10)
  a = 20       # a now points to a new value
  print(b)     # b is still 10 
  ```

  ##### Immutable objects in python
    - Integers
    - Floating-point numbers
    - Boolean
    - Strings
    - Tuples
    - Frozen set
    - Bytes
 
      <br/><br/>

#### Mutable objects
- Definition: Can change their contents in place (e.g. list, dict, set).
- Memory Behavior: In-place operations (like append, item assignment) modify the same object, so its reference (id) remains constant.
- Implication: Changing one variable DOES affect the other (if they point to the same object). We should be careful with shared references.
- eg,
- ```py
  x = [1, 2, 3]
  y = x         # both point to same list
  x.append(4)   # modifies the original list
  print(y)      # y is now [1, 2, 3, 4] ❗
  ```
  ##### Mutable objects in python
    - List
    - Set
    - Dictionary
    - Bytearray
    - Array
