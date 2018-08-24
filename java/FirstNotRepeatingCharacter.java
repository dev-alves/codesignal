package codesignal;

public class FirstNotRepeatingCharacter {
	
	public static void main(String[] args) {
		char result = firstNotRepeatingCharacter("z");
		System.out.println(result);
		
	}
	
	public static char firstNotRepeatingCharacter(String array) {
		char letra = array.charAt(0);
		if(array.length() == 1) return letra;
		for(int i=1; i<array.length(); i++) {
			if(array.substring(i, array.length()).indexOf(letra) == -1 && array.substring(0, i-1).indexOf(letra) == -1) {
				return letra;
			}
			
			letra = array.charAt(i);
		}
		
		return '_';
	}

}
