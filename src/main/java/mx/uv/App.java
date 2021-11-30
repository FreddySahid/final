package mx.uv;

import static spark.Spark.*;

import mx.uv.bd.*;

import com.google.gson.*;
import java.util.Map;
import java.util.UUID;
import java.util.HashMap;
public class App 
{
    private static Gson gson = new Gson();
    private static Map<String, Usuario> usuarios = new HashMap<>();
    public static void main( String[] args )
    {
        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });
        before((req, res) -> res.header("Access-Control-Allow-Origin", "*"));

        get("/usuarios", (req, res) -> {
            before((rq, rs) -> rs.type("application/json"));
            DAO dao = new DAO();
            // return gson.toJson(usuarios.values());
            //System.out.println(dao.listaUsuario().get(0).getEmail());
            return gson.toJson(dao.listaUsuario());
        });

        post("/usuario", (req, res) -> {
            String payload = req.body();
            String id = UUID.randomUUID().toString();
            Usuario u = gson.fromJson(payload, Usuario.class);
            u.setId(id);
            // usuarios.put(id, u);

            DAO dao = new DAO();
            JsonObject objetoJson = new JsonObject();
            objetoJson.addProperty("status", dao.crearUsuario(u));
            objetoJson.addProperty("id", id);
            return objetoJson;
        });
        /**Iniciar sesión***************************************************** */
        post("/usuarioB", (req, res) -> {
            String payload = req.body();
            Usuario u = gson.fromJson(payload, Usuario.class);
            String email = u.getEmail();
            String password = u.getPassword();

            DAO dao = new DAO();
            JsonObject objetoJson = new JsonObject();
            dao.buscarUsuario(email, password);
            return objetoJson;
        });

        /**Preguntas------------------------------------------------------ */

        post("/pregunta", (req, res) -> {
            String payload = req.body();
            String id = UUID.randomUUID().toString();
            Pregunta p = gson.fromJson(payload, Pregunta.class);
            p.setID(id);



            DAO dao = new DAO();
            JsonObject objetoJson = new JsonObject();
            objetoJson.addProperty("status", dao.crearPregunta(p));
            objetoJson.addProperty("id", id);
            return objetoJson;
        });
    }
}