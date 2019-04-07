<template>
    <div>
        Hello Vue, <input v-model="input"/>,

        <p>Your input is :<span>{{input}}</span></p>
        <!--<p>Node Version:{{process.versions.node}}</p>-->

        <p>Description:
           Data access is passed from controller to mapper xml, with at least 4 layers.
            We define a model, that when user request carries request parameters for data, the process must goes through these four layers, necessarily.
            Key points:
               controller name, controller method
               service name, service method
               the query model, shared by all layers,maybe checked in service layer of controller layer

            the model expressed in json:{
                name:
                methodName:
                parameter:
                layer:{
                   controller:{
                        name:
                        methodName:
                        method body:
                   }
                   service:{
                   }
                   mapper:{
                   }
                   mapperXml:{
                      name
                      methodName
                      methodBody
                  }
                }
            }
        </p>

        <label>Write A Unified Service</label>
        <label>Controller:</label>

        <label>Service:</label>

        <label>Mapper:</label>

        <label>Mapper XML:</label>

        <div>
            public class {{className}} {


            }
        </div>

        <div>

        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "App",
        data() {
            return {
                input: ""
            }
        }
    }
</script>

<style scoped>

</style>
