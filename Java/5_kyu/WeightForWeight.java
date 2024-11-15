import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class WeightSort {

	public static String orderWeight(String strng) {
    List<String> weight = Arrays.asList(strng.split(" "));

    weight.sort(Comparator.<String>comparingInt(e -> {
        int sum = 0;
        for (char d : e.toCharArray()) {
            sum += Character.getNumericValue(d);
        }
        return sum;
    }).thenComparing(String::compareTo));

    return String.join(" ", weight);
	}
}