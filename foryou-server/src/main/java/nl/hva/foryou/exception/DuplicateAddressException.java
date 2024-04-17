package nl.hva.foryou.exception;

public class DuplicateAddressException extends RuntimeException{

    public DuplicateAddressException(String message) {
        super(message);
    }
}
