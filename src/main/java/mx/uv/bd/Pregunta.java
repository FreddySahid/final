package mx.uv.bd;

public class Pregunta {
    private String id;
    private String pregunta;
    private String video;

    public Pregunta(String id, String pregunta, String video){
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
        this.pregunta = pregunta;

    }

    public String getVideo(){
        return video;
    }

    public void detVideo(String video){
        this.video = video;
    }
    
}
