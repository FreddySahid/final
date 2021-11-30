package mx.uv.bd;

public class Pregunta {
    private String id;
    private String pregunta;

    public Pregunta(String id, String pregunta){
        this.setID(id);
        this.setPregunta(pregunta);

    }

    public String getId(){
        return id;
    }

    public void setID( String id){
        this.id = id;
    }

    public String getPregunta(){
        return pregunta;
    }

    public void setPregunta(String pregunta){

    }
    
}
