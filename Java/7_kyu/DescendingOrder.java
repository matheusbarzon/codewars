import java.util.Arrays;

public class DescendingOrder {
  public static int sortDesc(final int num) {
    Integer[] digits = new Integer[String.valueOf(num).length()];

    int i = 0;
    for (char c : String.valueOf(num).toCharArray()) {
      digits[i++] = Character.getNumericValue(c);
    }

    Arrays.sort(digits);

    int result = 0;
    int multiplier = 1;
    for (Integer digit : digits) {
        result += digit * multiplier;
        multiplier *= 10;
    }

    return result;
  }
}