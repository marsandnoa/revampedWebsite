using System.Reflection;
using WebApi.Repositories;
using WebApi.Services;
using WebApi.Contro;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
RegisterServicesAndRepositories(builder.Services, "WebApi");
var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapControllers();
app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();
app.Run();

void RegisterServicesAndRepositories(IServiceCollection services, string assemblyName)
{
    var assembly = Assembly.Load(assemblyName);

    var allTypes = assembly.GetTypes();

    // Register repositories
    var repoTypes = allTypes.Where(t => t.GetInterfaces().Contains(typeof(IRepository)) && t.IsClass);
    foreach (var type in repoTypes)
    {
        var interfaceType = type.GetInterfaces().FirstOrDefault(i => i.Name == $"I{type.Name}");
        if (interfaceType != null)
        {
            services.AddScoped(interfaceType, type);
        }
    }

    // Register services
    var serviceTypes = allTypes.Where(t => t.GetInterfaces().Contains(typeof(IService)) && t.IsClass);
    foreach (var type in serviceTypes)
    {
        var interfaceType = type.GetInterfaces().FirstOrDefault(i => i.Name == $"I{type.Name}");
        if (interfaceType != null)
        {
            services.AddScoped(interfaceType, type);
        }
    }
}
