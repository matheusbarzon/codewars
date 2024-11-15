import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class AreSame {

	public static boolean comp(int[] a, int[] b) {
    if (b == null) return false;

    Integer[] bArray = Arrays.stream(b).boxed().toArray(Integer[]::new);
    List<Integer> list = new ArrayList<>(Arrays.asList(bArray));

    for (int i = 0; i < a.length; i++) {
      int index = list.indexOf(a[i]*a[i]);
      if (index != -1) {
        list.remove(index);
      }
    }

    return list.size() == 0;
  }
}